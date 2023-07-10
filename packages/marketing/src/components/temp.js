<div style={{ position: 'relative', overflow: 'hidden' }}>
  <video
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1
    }}
    autoPlay
    loop
    muted
  >
    <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
  </video>

  <div className="container-fluid d-flex flex-column align-items-center justify-content-center text-center hero-content" style={{ height: '100vh', position: 'relative', zIndex: 1, color: 'white', textAlign: 'center', padding: '50px' }}>
    <h1 className="display-4" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>Welcome to Turing Limited.</h1>
    <p className="lead mb-4 fw-bold" style={{ fontSize: '1.25rem' }}>Developing visionary software where Artificial Intelligence,
      Blockchain, and Distributed/Decentralized technologies come together, for the purposes of a safer,
      more egalitarian marketplace.</p>
    <p className="subscript">Credit to <a href="https://getbootstrap.com/">getbootstrap.com</a> for
      some styles and <a href="https://mdbootstrap.com/">mdbootstrap.com</a> for
      the animated background.</p>

    <a href="https://turinglimited.com/container/latest/index.html" className="btn btn-primary mt-4">Asset Security Use Cases</a>
    <a href="https://6uimj51ujk7.typeform.com/to/NMlyHccs" className="btn btn-primary mt-4" target="_blank" rel="noopener noreferrer">Contact Us!</a>
  </div>
</div>
