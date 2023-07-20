const Footer = () => {
    var date = new Date();
    return (
        <footer>
            <p class="copyright">
                Copyright ⓒ {date.getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;