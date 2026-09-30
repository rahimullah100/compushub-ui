const sampleCourses = [
  { id: 1, code: 'CS301', title: 'Web Information Systems', credits: 3 },
  { id: 2, code: 'CS302', title: 'Enterprise Web Applications', credits: 3 },
]

function Courses() {
  return (
    <div>
      <div className="mb-4"><p className="text-primary fw-semibold text-uppercase small mb-1">Academic catalog</p><h1 className="page-title h2 mb-2">Course Management</h1><p className="text-muted mb-0">Create and review the university course catalog.</p></div>
      <section className="card content-card mb-4">
        <div className="card-header bg-white border-bottom-0 pt-4 px-4"><h2 className="h5 mb-0">Add New Course</h2></div>
        <div className="card-body p-4"><form>
          <div className="row g-3">
            <div className="col-md-3"><label className="form-label" htmlFor="courseCode">Course Code</label><input id="courseCode" type="text" className="form-control" placeholder="e.g. CS401" /></div>
            <div className="col-md-5"><label className="form-label" htmlFor="courseTitle">Course Title</label><input id="courseTitle" type="text" className="form-control" placeholder="Course title" /></div>
            <div className="col-md-2"><label className="form-label" htmlFor="courseCredits">Credits</label><input id="courseCredits" type="number" className="form-control" min="1" placeholder="3" /></div>
            <div className="col-md-2 d-flex align-items-end"><button type="button" className="btn btn-primary w-100">Add Course</button></div>
          </div>
        </form></div>
      </section>
      <section className="card content-card">
        <div className="card-header bg-white border-bottom-0 pt-4 px-4 d-flex justify-content-between align-items-center"><h2 className="h5 mb-0">Course List</h2><span className="badge text-bg-light">{sampleCourses.length} courses</span></div>
        <div className="card-body p-4 pt-3"><div className="table-responsive">
          <table className="table table-hover mb-0"><thead className="table-dark"><tr><th scope="col">ID</th><th scope="col">Code</th><th scope="col">Title</th><th scope="col">Credits</th><th scope="col">Actions</th></tr></thead>
            <tbody>{sampleCourses.map((course) => <tr key={course.id}><td>{course.id}</td><td><span className="fw-semibold">{course.code}</span></td><td>{course.title}</td><td>{course.credits}</td><td className="text-nowrap"><button type="button" className="btn btn-sm btn-outline-warning me-2">Edit</button><button type="button" className="btn btn-sm btn-outline-danger">Delete</button></td></tr>)}</tbody>
          </table>
        </div></div>
      </section>
    </div>
  )
}

export default Courses
