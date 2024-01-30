import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="text-5xl text-center mt-80">
            <h3>Ooops!!!!! 404</h3>
          <Link className="mt-8" to ='/'> Go Back to home</Link>

        </div>
    );
};

export default Errorpage;