export function calculateCO2Savings(kilometers) {
    const BUS_CO2_PER_KM = 105; // in grams
    const TRAIN_CO2_PER_KM = 41; // in grams
    const CAR_CO2_PER_KM = 130; // in grams

    const co2Savings = [
        (kilometers * BUS_CO2_PER_KM) / 1000, // Convert grams to kilograms
        (kilometers * TRAIN_CO2_PER_KM) / 1000, // Convert grams to kilograms
        (kilometers * CAR_CO2_PER_KM) / 1000 // Convert grams to kilograms
    ];

    return co2Savings;
}
