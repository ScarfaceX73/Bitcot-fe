import React, { useEffect, useState } from 'react';
import fetchStream from '../../service';
import useAsync from '../../hooks/use-async';
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';
import Card from '../card';

const Series = () => {
    const { run, isLoading, data, error } = useAsync();
    const [series, setSeries] = useState([]);

    useEffect(() => {
        run(fetchStream());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        if (data?.length) {
            const filteredSeries = data?.filter(oneData => oneData.programType === 'series' && oneData.releaseYear >= 2010);
            filteredSeries.sort((firstSeries, secondSeries) => {
                const firstSeriesTitle = firstSeries?.title;
                const secondSeriesTitle = secondSeries?.title
                return firstSeriesTitle.localeCompare(secondSeriesTitle)
            })
            let trimmedSeries = [...filteredSeries]
            if (filteredSeries.length > 21) {
                let SeriesCopy = [...filteredSeries]
                trimmedSeries = SeriesCopy.slice(0, 21)
            }
            console.log("here", trimmedSeries)
            setSeries(trimmedSeries);
        }
    }, [data])
    return (
        <div>
            <Header />
            {isLoading ? <div style={{ height: "487px" }}>loading......</div> : <></>}
            <div className='grid-7-col'>
                {series ? series?.map((item) => {
                    return (
                        <div key={item.title}><Card item={item} /></div>
                    )
                }) : <></>}

            </div>
            {error ? <div style={{ height: "487px" }}>{JSON.stringify(error?.message)}</div> : <></>}
            <Footer />
        </div>
    )
}

export default Series