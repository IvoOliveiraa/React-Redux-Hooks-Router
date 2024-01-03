import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <p>
        <FaHome size={24} />
      </p>
      <p>
        <FaUserAlt size={24} />
      </p>
      <p>
        <FaSignInAlt size={24} />
      </p>
    </Nav>
  );
}
