import React, { FormEvent, useState } from 'react';
import { TextInput } from '../../components/TextInpute/TextInput';
import { IconAt } from '@tabler/icons-react';
import style from '../style.module.css';
import { DataFormType } from '../../Routing';

interface SignupProps {
	onSubmit: (event: FormEvent<HTMLFormElement>, dataForm: DataFormType) => void;
}

interface SignupFormState {
	name: string;
	nickname: string;
	email: string;
	isMan: boolean;
	isWoman: boolean;
	password: string;
	repeatPassword: string;
}

export const Signup = ({ onSubmit }: SignupProps) => {
	const [signupForm, setSignupForm] = useState<SignupFormState>({
		name: '',
		nickname: '',
		email: '',
		isMan: true,
		isWoman: false,
		password: '',
		repeatPassword: '',
	});

	const icon = <IconAt size={'0.8rem'} color="rgb(150 150 150)" />;
	return (
		<form
			onSubmit={(event) => onSubmit(event, signupForm)}
			className={style.formContainer}
		>
			<div>
				<TextInput
					value={signupForm.name}
					onChange={({ target }) =>
						setSignupForm({
							...signupForm,
							name: target.value,
						})
					}
					size="sm"
					label="Your name"
					description="Your name"
					placeholder="Name"
					type="text"
					variant="default"
				/>
				<TextInput
					value={signupForm.nickname}
					onChange={({ target }) =>
						setSignupForm({
							...signupForm,
							nickname: target.value,
						})
					}
					size="sm"
					label="Your nickname"
					description="Your nickname"
					placeholder="Nickname"
					type="text"
					variant="default"
					inputWithAsterisk
				/>
				<TextInput
					value={signupForm.email}
					onChange={({ target }) =>
						setSignupForm({
							...signupForm,
							email: target.value,
						})
					}
					size="sm"
					label="Your email"
					description="email"
					placeholder="Your email"
					type="email"
					variant="default"
					inputWithAsterisk
					leftSection={icon}
				/>
				<div className={style.wrapperInputRadio}>
					<label htmlFor="radio1">
						<input
							checked={signupForm.isMan}
							onChange={({ target }) =>
								setSignupForm({
									...signupForm,
									isMan: target.checked,
									isWoman: false,
								})
							}
							className={style.inputRadio}
							type="radio"
							id="radio1"
							name="radioGroup"
						/>
						Муж
					</label>

					<label htmlFor="radio2">
						<input
							checked={signupForm.isWoman}
							onChange={({ target }) =>
								setSignupForm({
									...signupForm,
									isWoman: target.checked,
									isMan: false,
								})
							}
							className={style.inputRadio}
							type="radio"
							id="radio2"
							name="radioGroup"
						/>
						Жен
					</label>
				</div>
				<TextInput
					value={signupForm.password}
					onChange={({ target }) =>
						setSignupForm({
							...signupForm,
							password: target.value,
						})
					}
					size="sm"
					label="Your password"
					placeholder="password"
					description="password"
					type="password"
					inputWithAsterisk
					variant="default"
				/>
				<TextInput
					value={signupForm.repeatPassword}
					onChange={({ target }) =>
						setSignupForm({
							...signupForm,
							repeatPassword: target.value,
						})
					}
					size="sm"
					label="Your repeat password"
					description="repeat password"
					placeholder="password"
					type="password"
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
