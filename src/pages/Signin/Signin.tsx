import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TextInput } from '../../components/TextInpute/TextInput';
import { IconAt } from '@tabler/icons-react';
import style from '../style.module.css';
import { DataFormType } from '../../Routing';

interface SigninProps {
	onSubmit: (event: FormEvent<HTMLFormElement>, dataForm: DataFormType) => void;
}

interface SigninFormState {
	email: string;
	password: string;
}

export const Signin = ({ onSubmit }: SigninProps) => {
	const [signinForm, setSigninForm] = useState<SigninFormState>({
		email: '',
		password: '',
	});
	const icon = <IconAt size={'0.8rem'} color="rgb(150 150 150)" />;

	return (
		<form
			onSubmit={(event) => onSubmit(event, signinForm)}
			className={style.formContainer}
		>
			<div>
				<TextInput
					value={signinForm.email}
					onChange={(event) =>
						setSigninForm({
							...signinForm,
							email: event.target.value,
						})
					}
					size="sm"
					type="email"
					label="Your email"
					placeholder="Your email"
					description="email"
					inputWithAsterisk
					variant="default"
					leftSection={icon}
				/>
				<TextInput
					value={signinForm.password}
					onChange={(event) =>
						setSigninForm({
							...signinForm,
							password: event.target.value,
						})
					}
					size="sm"
					type="password"
					label="Your password"
					placeholder="password"
					description="password"
					inputWithAsterisk
					variant="default"
				/>
				<button className={style.button} type="submit">
					Войти
				</button>
			</div>
		</form>
	);
};
