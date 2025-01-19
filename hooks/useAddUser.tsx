import { useState } from 'react';
import { supabase } from '../utils/supabase';

interface User {
    name: string;
    phone_number: string;
    gender: string;
    date_of_birth: string;
    email: string;
    role: string;
}

const useAddUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const addUser = async (user: User) => {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
            .from('users')
            .insert([user]);

        setLoading(false);

        if (error) {
            setError(error.message);
            return null;
        }

        return data;
    };

    return { addUser, loading, error };
};

export default useAddUser;