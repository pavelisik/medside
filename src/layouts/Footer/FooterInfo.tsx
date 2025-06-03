const FooterInfo = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-info">
            <p>
                <strong>ООО «Медсторона - медицинские технологии»</strong> ОГРН
                1182375072802
                <br />
                <span>Все права защищены &copy; 2011-{currentYear}</span>
            </p>
        </div>
    );
};

export default FooterInfo;
