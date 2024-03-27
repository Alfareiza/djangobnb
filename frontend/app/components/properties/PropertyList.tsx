'use client';

import {useEffect, useState} from 'react';
import PropertyListItem from "./PropertyListItem";
import apiService from '@/app/services/apiService'

export type PropertyType = {
    id: string;
    image_url: string;
    price_per_night: number;
    title: string;
}

interface PropertyListProps {
    host_id? : string | null
}

const PropertyList: React.FC<PropertyListProps> = ({
    host_id
}) => {
    // Content shown accessing to /properties/
    // Here, the API is called in order to get all the properties and 
    // show them in the front trough PropertyListItem

    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        let url = '/api/properties/'
        if (host_id){
            url += `?host_id=${host_id}`
        }

        const tmpProperties = await apiService.get(url);
        setProperties(tmpProperties.data);
    }

    useEffect (() => {
        getProperties();
    }, []);

    return (
            <>
                { properties.map((property) => {
                        return (
                            <PropertyListItem
                                key={property.id}
                                property={property}
                            />
                        )
                    }
                )}
            </>
    )
}

export default PropertyList;