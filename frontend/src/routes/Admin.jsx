import React, { useMemo, useState } from 'react';
import { Lock, LogIn, Mail, User, MessageSquare, Calendar, ShieldAlert } from 'lucide-react';
import { API_BASE_URL } from '../utils/base-url';

const Admin = () => {
	const [secret, setSecret] = useState('');
	const [isAuthorized, setIsAuthorized] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [contacts, setContacts] = useState([]);

	const fetchContacts = async (adminKey) => {
		setLoading(true);
		setError('');
		try {
			const res = await fetch(`${API_BASE_URL}/api/v1/contacts`, {
				headers: { 'x-admin-key': adminKey },
			});
			const json = await res.json();
			if (!res.ok || !json.success) {
				throw new Error(json.message || 'Failed to fetch contacts');
			}
			setContacts(json.data || []);
			setIsAuthorized(true);
		} catch (err) {
			setError(err.message || 'Authorization failed');
			setIsAuthorized(false);
		} finally {
			setLoading(false);
		}
	};

	const handleAccess = async (e) => {
		e.preventDefault();
		if (!secret.trim()) {
			setError('Please enter admin secret');
			return;
		}
		await fetchContacts(secret.trim());
	};

	if (!isAuthorized) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-900 p-4">
				<div className="w-full max-w-md bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
					<div className="flex items-center gap-3 mb-6">
						<div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30">
							<Lock className="h-6 w-6 text-primary-600 dark:text-primary-400" />
						</div>
						<h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Access</h1>
					</div>
					<form onSubmit={handleAccess} className="space-y-5">
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Admin API Secret</label>
							<input
								type="password"
								className="input-field w-full"
								placeholder="Enter secret"
								value={secret}
								onChange={(e) => setSecret(e.target.value)}
							/>
						</div>
						{error && (
							<div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 text-sm flex items-center gap-2">
								<ShieldAlert className="h-4 w-4" />
								{error}
							</div>
						)}
						<button
							type="submit"
							disabled={loading}
							className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
						>
							{loading ? (
								<>
									<div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
									Checking...
								</>
							) : (
								<>
									<LogIn className="h-5 w-5" />
									Access
								</>
							)}
						</button>
					</form>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white dark:bg-dark-900 p-6">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contacts</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{contacts.map((c) => (
						<div key={c._id} className="bg-white dark:bg-dark-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-5">
							<div className="flex items-start justify-between">
								<div className="space-y-2">
									<div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
										<User className="h-4 w-4 text-primary-600 dark:text-primary-400" /> {c.name}
									</div>
									<div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
										<Mail className="h-4 w-4" /> {c.email}
									</div>
									<div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
										<MessageSquare className="h-4 w-4" /> {c.subject}
									</div>
								</div>
								<div className="text-xs text-gray-500 dark:text-gray-400">
									<Calendar className="inline h-3 w-3 mr-1" />
									{new Date(c.createdAt).toLocaleString()}
								</div>
							</div>
							<p className="mt-4 text-gray-700 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">{c.message}</p>
						</div>
					))}
					{contacts.length === 0 && (
						<div className="col-span-full text-center text-gray-500 dark:text-gray-400">No contacts found.</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Admin;


