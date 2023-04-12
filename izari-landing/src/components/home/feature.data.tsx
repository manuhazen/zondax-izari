import React, { ReactNode } from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import StorageIcon from '@mui/icons-material/Storage'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import LanguageIcon from '@mui/icons-material/Language'

interface Data {
  title: string
  description: string
  icon?: ReactNode
  link?: string
}

export const data: Data[] = [
  {
    title: 'Store and Retrieve Data',
    description: 'A powerful and dynamic distributed cloud storage network for your data.',
    icon: <StorageIcon />,
    link: 'https://filecoin.io/store/',
  },
  {
    title: 'Flexibility without compromise',
    description: 'The Filecoin network is made up of a large number of diverse storage providers and developers.',
    icon: <AttachMoneyIcon />,
    link: 'https://filecoin.io/store/#flexible',
  },
  {
    title: 'Store. Provide. Earn.',
    description:
      'Filecoin is helping individuals and organizations fulfill their goals of becoming Storage Providers on the Filecoin network',
    icon: <WarehouseIcon />,
    link: 'https://sp.filecoin.io/?utm_source=filecoin&utm_medium=referral&utm_campaign=sp-nav&utm_content=en-us',
  },
  {
    title: 'Build on Web3',
    description: 'Filecoin is a groundbreaking storage network with the power of built-in incentives.',
    icon: <LanguageIcon />,
    link: 'https://filecoin.io/build/#community',
  },
]
