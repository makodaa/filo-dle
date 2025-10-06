import github_logo from '../assets/github-logo-dark.png';

const Footer = () => {
    return(
        <footer className="flex justify-center align-items-center">
            <a href="https://github.com/makodaa/filo-dle" target="_blank" rel="noreferrer">
                <img src={github_logo} className="h-10 w-10 m-5"></img>
            </a>
        </footer>
    )
};

export default Footer;