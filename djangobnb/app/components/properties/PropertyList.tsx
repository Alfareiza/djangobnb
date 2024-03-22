'use client';

import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from 'react';
import PropertyListItem from "./PropertyListItem";

export type PropertyType = {
    id: string;
    image_url: string;
    price_per_night: number;
    title: string;
}

const PropertyList = () => {

    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const url = 'http://localhost:8000/api/properties/'
        await fetch(url, {
                method: 'GET'
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('json', json);
                    setProperties(json.data)
                })
                .catch((error) => {
                    console.log('json', error);
                })
    }

    useEffect (() => {
        getProperties();
    }, []);

    return (
            <>
                { properties.map((property) => {
                console.log(property)
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