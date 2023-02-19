import React from 'react'
import Master from '../layout/Master'

export default function home() {
  return (
    <Master>
        <div className="container mt-3">
          <div className="row">
            {/* For Category and Information */}
            <div className="col-md-4">
              <div className="card bg-gray-100 mb-3">
                <div className="card-body">
                  <li className="list-group-item bg-bg text-white">
                    Label
                  </li>
                  <ul className="list-group label">
                    <li className="list-group-item bg-dark text-white">
                      <span className="fas fa-tags text-white text-small" />
                      &nbsp; &nbsp;
                      Laravel Note
                      <span className="badge badge-primary  float-right">3</span>
                    </li>
                    <li className="list-group-item bg-dark text-white">
                      <span className="fas fa-tags text-white text-small" />
                      &nbsp; &nbsp;
                      Vue JS Note
                      <span className="badge badge-primary  float-right">3</span>
                    </li>
                    <li className="list-group-item bg-dark text-white">
                      <span className="fas fa-tags text-white text-small" />
                      &nbsp; &nbsp;
                      Vue JS Note
                      <span className="badge badge-primary  float-right">3</span>
                    </li>
                    <li className="list-group-item bg-dark text-white">
                      <span className="fas fa-tags text-white text-small" />
                      &nbsp; &nbsp;
                      Vue JS Note
                      <span className="badge badge-primary  float-right">3</span>
                    </li>
                    <li className="list-group-item bg-dark text-white">
                      <a href className="float-right text-decoration-none text-white">View All</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card bg-gray-100 mb-3">
                <div className="card-body">
                  <li className="list-group-item bg-bg text-white">
                    Contribute Notes
                    <a href className="badge badge-dark  text-white float-right">All</a>
                  </li>
                  <ul className="list-group label">
                    <li className="list-group-item bg-dark text-white">
                      <i className="far fa-newspaper" />
                      &nbsp; &nbsp;
                      Laravel Note
                      <small> from</small>
                      <b className="text-primary">Myo Thant Kyaw</b>
                    </li>
                    <li className="list-group-item bg-dark text-white">
                      <i className="far fa-newspaper" />
                      &nbsp; &nbsp;
                      Vue Note
                      <small> from</small>
                      <b className="text-primary">Myo Thant Kyaw</b>
                    </li>
                    <li className="list-group-item bg-dark text-white">
                      <i className="far fa-newspaper" />
                      &nbsp; &nbsp;
                      Income Note
                      <small> from</small>
                      <b className="text-primary">Myo Thant Kyaw</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    {/* Loop Product */}
                    <div className="col-md-4  mb-3">
                      <a href="detail.html">
                      </a><div className="card shadow-lg"><a href="detail.html">
                          <div className="card-header bg-danger">
                            <h5 className="text-white">Income Note</h5>
                          </div>
                        </a><div className="card-body"><a href="detail.html">
                          </a><div className="row"><a href="detail.html">
                            </a><div className="col-md-4 text-center"><a href="detail.html">
                              </a><a href className="badge badge-primary">
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                            <div className="col-md-4 text-center">
                              <a href className="badge badge-warning">
                                <i className="fas fa-edit" />
                              </a>
                            </div>
                            <div className="col-md-4 text-center">
                              <a href className="badge badge-warning">
                                <i className="fas fa-share" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <a href="detail.html">
                      </a><div className="card shadow-lg"><a href="detail.html">
                          <div className="card-header bg-primary">
                            <h5 className="text-white">For Laravel Vue</h5>
                          </div>
                        </a><div className="card-body"><a href="detail.html">
                          </a><div className="row"><a href="detail.html">
                            </a><div className="col-md-6 text-center"><a href="detail.html">
                              </a><a href className="badge badge-primary">
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                            <div className="col-md-6 text-center">
                              <a href className="badge badge-warning">
                                <i className="fas fa-edit" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <a href="detail.html">
                      </a><div className="card shadow-lg"><a href="detail.html">
                          <div className="card-header bg-default">
                            <h5 className="text-white">Expense Vue</h5>
                          </div>
                        </a><div className="card-body"><a href="detail.html">
                          </a><div className="row"><a href="detail.html">
                            </a><div className="col-md-6 text-center"><a href="detail.html">
                              </a><a href className="badge badge-primary">
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                            <div className="col-md-6 text-center">
                              <a href className="badge badge-warning">
                                <i className="fas fa-edit" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <a href="detail.html">
                      </a><div className="card shadow-lg"><a href="detail.html">
                          <div className="card-header bg-warning text-center">
                            <h5 className="text-white">Vue </h5>
                          </div>
                        </a><div className="card-body"><a href="detail.html">
                          </a><div className="row"><a href="detail.html">
                            </a><div className="col-md-6 text-center"><a href="detail.html">
                              </a><a href className="badge badge-primary">
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                            <div className="col-md-6 text-center">
                              <a href className="badge badge-warning">
                                <i className="fas fa-edit" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <a href="detail.html">
                      </a><div className="card shadow-lg"><a href="detail.html">
                          <div className="card-header bg-danger">
                            <h5 className="text-white">Income Note</h5>
                          </div>
                        </a><div className="card-body"><a href="detail.html">
                          </a><div className="row"><a href="detail.html">
                            </a><div className="col-md-6 text-center"><a href="detail.html">
                              </a><a href className="badge badge-primary">
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                            <div className="col-md-6 text-center">
                              <a href className="badge badge-warning">
                                <i className="fas fa-edit" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <a href="detail.html">
                      </a><div className="card shadow-lg"><a href="detail.html">
                          <div className="card-header bg-primary">
                            <h5 className="text-white">For Laravel Vue</h5>
                          </div>
                        </a><div className="card-body"><a href="detail.html">
                          </a><div className="row"><a href="detail.html">
                            </a><div className="col-md-6 text-center"><a href="detail.html">
                              </a><a href className="badge badge-primary">
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                            <div className="col-md-6 text-center">
                              <a href className="badge badge-warning">
                                <i className="fas fa-edit" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <a href="detail.html">
                      </a><div className="card"><a href="detail.html">
                          <div className="card-header bg-warning text-center">
                            <h5 className="text-white">Vue </h5>
                          </div>
                        </a><div className="card-body"><a href="detail.html">
                          </a><div className="row"><a href="detail.html">
                            </a><div className="col-md-6 text-center"><a href="detail.html">
                              </a><a href className="badge badge-primary">
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                            <div className="col-md-6 text-center">
                              <a href className="badge badge-warning">
                                <i className="fas fa-edit" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <a href="detail.html">
                      </a><div className="card"><a href="detail.html">
                          <div className="card-header bg-danger">
                            <h5 className="text-white">Income Note</h5>
                          </div>
                        </a><div className="card-body"><a href="detail.html">
                          </a><div className="row"><a href="detail.html">
                            </a><div className="col-md-6 text-center"><a href="detail.html">
                              </a><a href className="badge badge-primary">
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                            <div className="col-md-6 text-center">
                              <a href className="badge badge-warning">
                                <i className="fas fa-edit" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <a href="detail.html">
                      </a><div className="card"><a href="detail.html">
                          <div className="card-header bg-primary">
                            <h5 className="text-white">For Laravel Vue</h5>
                          </div>
                        </a><div className="card-body"><a href="detail.html">
                          </a><div className="row"><a href="detail.html">
                            </a><div className="col-md-6 text-center"><a href="detail.html">
                              </a><a href className="badge badge-primary">
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                            <div className="col-md-6 text-center">
                              <a href className="badge badge-warning">
                                <i className="fas fa-edit" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* For Load */}
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <button className="btn btn-primary btn-fab btn-icon btn-round">
                        <i className="fas fa-arrow-down" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Master>
  )
}
