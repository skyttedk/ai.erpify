// models/Customer.js
import Model from '../lib/orm/Model.js';
import fields from './fields/index.js'; // Corrected import path

class Customer extends Model {
    static tableName = 'customers';

    // Use the domain‑specific field templates; you can override only `required` and `default`
    static fields = {
        name: new fields.NameField(),
        age: new fields.AgeField(),
        phone: new fields.PhoneField(),
        zip: new fields.ZipField(),
    };

    // Optionally add renameMap, indexes, etc.

    static indexes = [
        { name: 'idx_name', columns: ['name'], unique: true }, // Unique index on name
        { name: 'idx_zip', columns: ['zip'], unique: false }, // Non-unique index on zip
    ];

    // --------------------------
    // Hooks
    // --------------------------

    static async onBeforeCreate(data) {
        console.log('Before creating customer:', data);
        return data;
    }

    static async onAfterCreate(record) {
        console.log('Customer created:', record);
    }

    static async onBeforeUpdate(data) {
        console.log('Before updating customer:', data);
        return data;
    }

    static async onAfterUpdate(record) {
        console.log('Customer updated:', record);
    }

    static async onBeforeDelete(id) {
        console.log('Before deleting customer ID:', id);
    }

    static async onAfterDelete(result) {
        console.log('Customer deleted:', result);
    }
}

export default Customer;
