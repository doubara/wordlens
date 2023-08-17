import sun from '../assets/sun.svg'

const NavComponent = ()=>{

    return <nav>
        <div>
            <h6>
                <span></span>
                Wordlens
            </h6>
        </div>
        <button>
            <img src={sun} />
        </button>
    </nav>          
}

export default NavComponent;