import useForm from '../../useForm';
import axios from 'axios';
import { API_KEY01 } from '../../API_KEYS';
import './SearchBar.css';


const SearchBar = (props) => {
    const { formValues, handleChange, handleSubmit } = useForm(handleSearch);

    async function handleSearch() {
        try {
            console.log(formValues);
            let searchResults = [];

            await axios
                .get(`https://www.googleapis.com/youtube/v3/search?q=${formValues.searchParams}&part=snippet&maxResults=11&key=${API_KEY01}`)
                //.then(res => { props.setYtResults(res.data.items) });
                .then(res => { searchResults = res.data.items })
                //.then(props.setCurrentVideoInfo(searchResults.shift()))
                .then(props.setYtResults(searchResults));
            console.log(searchResults);

        } catch (error) {
            console.log(error.message);
        }
    };

    return (

        <form id="searchBar" onSubmit={(e) => handleSubmit(e)}>
                <input
                    id="searchText"
                    aria-labelledby="searchParams"
                    name="searchParams"
                    placeholder="Search"
                    value={formValues.searchParams}
                    onChange={(e) => handleChange(e)}
                />

                <button id="search-button" type="Submit">Search</button>
        </form>
    );
};


export default SearchBar;
