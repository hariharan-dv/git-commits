import { useState, useEffect } from "react"
import axios from 'axios'

function App() { 

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const getCollections = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/hariharan-dv/quadraflake-test/commits');
        setIsLoaded(true);
        setCollections(response.data);

      } catch (error) {
        setError(error);
        setIsLoaded(true);
      }
    }

    getCollections();
  }, [])

  return (
    <>
      {isLoaded ?
        collections?.length > 0 ?
          <div>
            {
              collections.map((item) =>
              (<ol key={item.sha} >
                Message: {item?.commit?.message} <br />
                Date: {Date(item?.committer?.date)} <br />
                Author: {item?.commit?.author?.name}
              </ol>)
              )
            }
          </div> : <div>
            Error - {error.message}
          </div>
        : <div>
          Loading Data ...
        </div>

      }
    </> 
  );
}

export default App;
