import React, { memo } from 'react'
import { UserType } from '../types/user'

type Props = {
    index: number;
    user: UserType;
    onClick: (user: UserType) => void;
    isActive: boolean;
}

const User: React.FC<Props> = memo(({ index, user, onClick, isActive }) => {

    return (
        <tr
            key={user.id}
            onClick={() => onClick(user)}
            className={`table-info text-start ${isActive? 'table-active' : ''}`}
            style={{
                cursor: 'pointer',
            }}
        >
            <th scope="row">{index}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address.city}</td>
        </tr>
    )
})

export default User