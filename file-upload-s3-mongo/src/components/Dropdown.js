import '../styleComponents/Dropdown.css'
const Dropdown = () => {
  return (
    <nav>
            <ul class="menu menu--background">
             <li class="menu__button menu__button--arrow">
              S3 Bucket Name
                <div class="dropdown-container">
                  <ul>
                    <li>Bucket 1</li>
                    <li>Bucket 2</li>
                    <li>Bucket 3</li>                        
                    <li>Bucket 4</li>                        
                  </ul>
                </div>
              </li>
              <li class="menu__button menu__button--arrow">
              Mongo Collection name
                <div class="dropdown-container">
                  <ul>
                    <li>Collection 1</li>
                    <li>Collection 2</li>
                    <li>Collection 3</li>                                                
                  </ul>
                </div>
              </li>
       
            </ul>
          </nav>
  )
}

export default Dropdown