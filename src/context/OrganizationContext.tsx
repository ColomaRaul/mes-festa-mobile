import { createContext, useEffect, useState } from "react";
import mesFestaApi from "../api/mesFestaApi";
import { Organization, OrganizationByUserResponse } from "../intefaces/organizationInterface";

type OrganizationContextType = {
    organization: Organization | null;
    loadMainOrganization: () => void;
};

export const OrganizationContext = createContext({} as OrganizationContextType);

export const OrganizationProvider = ({ children }: any) => {
    const [organization, setOrganization] = useState<Organization | null>(null);
    
    useEffect(() => {
        loadMainOrganization();
    }, []);

    const loadMainOrganization = async() => {
        const resp = await mesFestaApi.get<OrganizationByUserResponse[]>('/organization/by-user');
        setOrganization({
            id: resp.data[0].organization_id,
            name: resp.data[0].organization_name,
        })
    };


    return (
        <OrganizationContext.Provider value={{ 
            organization, 
            loadMainOrganization
        }}>
            {children}
        </OrganizationContext.Provider>
    );
};
