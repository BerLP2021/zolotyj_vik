import React, { useCallback, useState } from 'react';
import { useGetUsersQuery } from '../api/usersApi';
import { UserType } from '../types/user';
import User from './User';
import Title from './Title';

const UserTable: React.FC = () => {
    const { data: users, error, isLoading } = useGetUsersQuery(undefined);
    
    const [isActive, setIsActive] = useState<number>(0);
    
    const logUser = useCallback((user: UserType) => {
        setIsActive(user.id);
        console.log(user);
    }, []);
    
    if (isLoading) return <p className="text-center mt-5">Loading...</p>;

    if (error) return <p className='text-center mt-5'>Error loading users</p>;

    return (
        <>
            <Title styles={{fontSize: '47px'}}>Тут можна побачити таблицю юзерів з API та приклад кастомного компоненту Title</Title>

            <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">#</th>
                        <th scope="col">Ім'я</th>
                        <th scope="col">Електронна пошта</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Адреса (місто)</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user: UserType, index: number) => (
                        <User
                            key={user.id}
                            index={index + 1}
                            user={user}
                            onClick={logUser}
                            isActive={isActive === user.id}
                        />
                    ))}
                </tbody>
            </table>
        </>
        );    
};  

export default UserTable;
