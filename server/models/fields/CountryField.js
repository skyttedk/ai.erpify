import Field from '../../lib/orm/Field.js';

/**
 * A field class for establishing a one-to-many relationship with the Country table.
 * This field stores a reference to a country record.
 *
 * @param {Object} options - Configuration options.
 * @param {boolean} [options.required=false] - Whether the field is required.
 * @param {string} [options.default=null] - Default country ID if none is provided.
 */
class CountryField extends Field {
    constructor(options = {}) {
        // Fixed properties for a Country reference field
        const fixedProperties = {
            uid: '{a7e9d312-8f56-4b91-b954-c0e76c3d8e2f}',
            type: 'lookup',
            caption: 'Country',
        };

        // Only allow specific properties to be overridden by options
        const allowedOverrides = {
            required: options.required || false,
            default: options.default || null,
        };

        // Field documentation provides metadata about the field
        const documentation = {
            description: 'Establishes a one-to-many relationship with the Country table',
            examples: ['1', '2'],
            usage: 'Use this field to reference a country from the Country collection',
        };

        super({ 
            ...fixedProperties, 
            ...allowedOverrides, 
            documentation,
            options: {
                dataSource: 'Country',
                displayField: 'name',
                valueField: 'id',
                required: options.required || false,
                validation: {
                    message: 'Please select a valid country'
                }
            }
        });
    }
    
    // Get default value (no default country)
    getDefaultValue() {
        return null;
    }
}

export default CountryField; 