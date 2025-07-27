export interface MultivendorPluginOptions {
    platformFeePercent: number;
    platformFeeSKU: string;
}

export interface CreateSellerInput {
    firstName: string;
    businessid: string;
    lastName: string;
    emailAddress: string;
    password: string;
    phoneNumber: string;
    address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
}
