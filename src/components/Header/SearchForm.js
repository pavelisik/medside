const SearchForm = () => {
    return (
        <form id="search" name="search" method="get" action="/">
            <div className="search-group">
                <input
                    className="search_body"
                    type="text"
                    name="s"
                    placeholder="Поиск"
                    value=""
                    maxlength="70"
                    accesskey="s"
                    autocapitalize="off"
                    autocomplete="off"
                    autocorrect="off"
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='Поиск'"
                />

                <span className="icon-image search-close"></span>
                <div className="search-button">
                    <input
                        className="icon-image"
                        id="button"
                        type="submit"
                        name=""
                        value="&#xeb33"
                        disabled="disabled"
                    />
                    <div className="inner"></div>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;
