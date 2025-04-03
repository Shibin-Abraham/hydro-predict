import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import RaingaugeContext from "./RaingaugeContext";
import { getRaingaugeData } from "../../../API/Handler/getDataHandler";

const RaingaugeProvider = ({ children }) => {
    const [raingaugeData, setRaingaugeData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAllRaingaugeData = useCallback(async (params = {}) => {
        setLoading(true);
        try {
            const { data } = await getRaingaugeData(params);
            console.log('Raingauge Data', data);

            // Filter raingauges with and without data
            const raingaugesWithData = data.filter(rg => rg.raingauge_data.length > 0);
            const raingaugesWithoutData = data.filter(rg => rg.raingauge_data.length === 0);

            // Sort raingauges with data by latest value in descending order
            const sortedRaingaugesWithData = raingaugesWithData.sort((a, b) => {
                const valA = parseFloat(a.raingauge_data[0].value) || 0;
                const valB = parseFloat(b.raingauge_data[0].value) || 0;
                return valB - valA; // Sorts in descending order
            });

            // Combine sorted raingauges with data and those without
            const sortedData = [...sortedRaingaugesWithData, ...raingaugesWithoutData];

            // Update state with sorted data
            setRaingaugeData(sortedData);
        } catch (error) {
            console.error("Error fetching Raingauge data:", error);
            const errorMsg = error.response?.data?.error || 
                             error.response?.data?.message || 
                             'An error occurred while fetching Raingauge data.';
            console.error(errorMsg);
        } finally {
            setLoading(false);
        }
    }, []);

    // Fetch data when component mounts
    useEffect(() => {
        fetchAllRaingaugeData();
    }, [fetchAllRaingaugeData]);

    // Provide both data and loading state to consumers
    const value = {
        raingaugeData,
        setRaingaugeData,
        loading,
        fetchAllRaingaugeData // Exposing the fetch function if needed
    };

    return (
        <RaingaugeContext.Provider value={value}>
            {children}
        </RaingaugeContext.Provider>
    );
};

RaingaugeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RaingaugeProvider;