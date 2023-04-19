const UpdateForm = ({ updateData, changeHolder, updateTask, cancelUpdate }) => {
    return(
      <>
        <div className="row">
          <div className="col">
            <input 
              value={ updateData && updateData.title }
              onChange={ (e) => changeHolder(e)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={updateTask}
              className="btn btn-lg btn-update"
            >Update</button>
            <button
              onClick={cancelUpdate}
              className="btn btn-lg btn-cancel"
            >Cancel</button>
          </div>
        </div>
        <br />  
      </>
    )
  }
  
  export default UpdateForm;