import React, { FormEvent, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Signup } from './pages/Signup/Signup';
import { Forms } from './pages/Forms';
import { Signin } from './pages/Signin/Signin';

export interface DataFormType {
	password: string;
	email: string;
	name?: string;
	nickname?: string;
	isMan?: boolean;
	isWoman?: boolean;
	repeatPassword?: string;
}

export const Routing = () => {
	const onSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>, dataForm: DataFormType) => {
			event.preventDefault();
			console.log(dataForm);
		},
		[],
	);

	return (
		<Routes>
			<Route element={<Forms />}>
				<Route index path="/" element={<Signin onSubmit={onSubmit} />} />
				<Route path="/signup" element={<Signup onSubmit={onSubmit} />} />
			</Route>
		</Routes>
	);
};
