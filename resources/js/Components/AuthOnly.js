import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function AuthOnly({ auth, children }) {
    return auth.user && children;
}
