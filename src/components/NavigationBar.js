function NavigationBar(){
    return(
        <div>
            <nav class="navbar fixed-top navbar-expand-lg bg-danger navbar-dark ">
            <div class="container-fluid">
            <a class="navbar-brand" href="/HomeImg">Tour and Travel</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li class="nav-item">
                        <a class="nav-link active" href="/HomeImg" aria-current="page" >Home</a>
                    </li> */}
                    <li class="nav-item">
                        <a class="nav-link" href="/login" tabindex="-1" aria-disabled="true">Admin Login</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" href="/adminReg" tabindex="-1" aria-disabled="true">Admin Register</a>
                    </li> */}
                     <li class="nav-item">
                        <a class="nav-link" href="/userlogin" tabindex="-1" aria-disabled="true">UserLogin</a>
                    </li>
                 {/*   <li class="nav-item">
                        <a class="nav-link" href="/admin/dashboard" tabindex="-1" aria-disabled="true">Admin Dashboard</a>
                    </li> */}
                    
                </ul>
            </div>
            </div>
        </nav>
      </div>

    )
}

export default NavigationBar;