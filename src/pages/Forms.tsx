import React from 'react';
import style from './forms.module.css';

import { NavLink, Outlet } from 'react-router-dom';

export const Forms = () => {
	return (
		<div className={style.container}>
			<div className={style.wpapper}>
				<NavLink
					className={({ isActive }) =>
						`${style.link} ${isActive && style.activeLink}`
					}
					to="/signup"
				>
					<p>Форма "Signup"</p>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`${style.link} ${isActive && style.activeLink}`
					}
					to={'/'}
				>
					<p>Форма "Signin"</p>
				</NavLink>
			</div>
			<div className={style.formContainer}>
				<Outlet />
			</div>
		</div>
	);
};
