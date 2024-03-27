'use client';

import {useEffect, useState} from 'react';
import PropertyListItem from "./PropertyListItem";
import apiService from '@/app/services/apiService'

export type PropertyType = {
    id: string;
    image_url: string;
    price_per_night: number;
    title: string;
    is_favorite: boolean;
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

    const markFavorite = (id: string, is_favorite: boolean) =>{
        const tmpProperties = properties.map((property: PropertyType) => {
            if (property.id == id ){
                property.is_favorite = is_favorite
                if (is_favorite){
                    console.log('Favorited successfully!')
                } else {
                    console.log('removed from favorites')
                }

            }
            return property
        })
        setProperties(tmpProperties)
    }

    const getProperties = async () => {
        let url = '/api/properties/'
        if (host_id){
            url += `?host_id=${host_id}`
        }

        const tmpProperties = await apiService.get(url);
        setProperties(tmpProperties.data.map((property: PropertyType) => {
            if (tmpProperties.favorites.includes(property.id)) {
                property.is_favorite = true
            } else {
                property.is_favorite = false
            }

            return property
        }));
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
                                markFavorite={(is_favorite: any) => markFavorite(property.id, is_favorite)}
                            />
                        )
                    }
                )}
            </>
    )
}

export default PropertyList;