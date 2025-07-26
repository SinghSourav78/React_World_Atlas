import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCard";
import { SearchFilter } from "../Components/UI/SearchFilter";

export const Country = () => {

    const [isPending, startTransition] = useTransition(); 
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");
    useEffect(() => {
        //getCountryData();
        startTransition( async () => {
            const res = await getCountryData();
            //console.log(res);
            setCountries(res.data);
        })
    },[])

    if(isPending) return <Loader />
    console.log(search, filter);

    // line no. 26 mein mujhe individual country mil raha hota h one by one
    const searchCountry = (country) => {
        if(search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return country;
    }

    const filterRegion = (country) => {
        if(filter === "all") {
            return country;
        }
        return country.region === filter;
    }

    //here is the main logic 
    const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country) );

    return (
        <section className="country-section">

            <SearchFilter 
                search={search} 
                setSearch={setSearch} 
                filter={filter} 
                setFilter={setFilter}
                countries={countries}
                setCountries={setCountries}
            />
            <ul className="grid grid-four-cols">
                {
                    filterCountries.map((curCountry, index) => {
                        return <CountryCard country={curCountry} key={index} />
                    })
                }
            </ul>
        </section>
    )
};