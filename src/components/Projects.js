// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Streak Cloud Drive</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>Real-Time Cloud file storage
                    </p>

                    <a href="https://streak-drive-50256.web.app/" target="" className="button">Site</a>
                    <a href="https://github.com/Uniswap/v2-core" target="" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Streak Chat</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>A real-time firebase Signal Clone chat
                    </p>

                    <a href="https://streakline-7e21d.web.app/" target="" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Aave</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>
                    </p>

                    <a href="https://aave.com/" target="" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;