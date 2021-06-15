import React from 'react';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';


class UserPagination extends React.Component{
constructor(){
    super();

    this.state = {
        users : [],
        offset: 0,
        perPage: 6,
            currentPage: 0
    };
    this.handlePageClick = this
            .handlePageClick
            .bind(this);
}

receivedData = async() => {
    const res1 = await Axios.get("https://reqres.in/api/users?page=1");
    const res2 = await Axios.get("https://reqres.in/api/users?page=2");
   const response = await res1.data.data;
    const response1 = await res2.data.data;
    const res = response.concat(response1);
    const data = res;

    this.setState({
        ...this.state,
        pageCount: Math.ceil(data.length / this.state.perPage),   
        users : data.slice(this.state.offset, this.state.offset + this.state.perPage)     
          })
}

handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });
};

componentDidMount(){
    this.receivedData();
}

render(){
    return(
        <section className ="p-3">
        <div className="container">
            <div className = "row">
             <div className = "col">
               <h1 className = "text-center">List Of Users</h1>
                    <table className = "table table-hover text-center table-striped table-primary ">
                      <thead className = "bg-dark text-primary">
                        <tr>
                          <th>ID</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            </tr>                
                                </thead>
                                <tbody>                
                               {
                                    this.state.users.length &&
                                            this.state.users.map((user) => {
                                                return(
                                       <tr key = {user.id}>
                                              <td>{user.id}</td> 
                                                    <td>
                                                        <img src = {user.avatar} alt = "" className = "rounded-circle"/>
                                                        </td>
                                                    <td>{user.first_name}{user.last_name}</td> 
                                                    <td>{user.email}</td>  
                                                </tr>
                                                  )
                                                   
                                                 })
                                                }  
                                </tbody>
                           </table>
                                
                                   {/* {this.state.postData}*/}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>           
                                   
          </div>
         </div>
      </div>
      </section>
    )
}

}
export default UserPagination;