import { Grid, List } from '@mui/material';
import routes from '@/lib/constants/routes';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import NavItem from '@/app/(dashboard)/_lib/NavItem';

type Props = { open: boolean };

export const menuItems = [
  {
    name: 'Dashboard',
    link: routes.dashboard,
    icon: <DashboardOutlinedIcon />,
  },
  {
    name: 'Recommendations',
    link: routes.recommendations,
    icon: <AutoAwesomeOutlinedIcon />,
  },
  {
    name: 'Policies',
    link: routes.policies,
    icon: <AssignmentOutlinedIcon />,
  },
  {
    name: 'Events',
    link: routes.policies,
    icon: <PlagiarismOutlinedIcon />,
  },
  {
    name: 'Waivers',
    link: routes.policies,
    icon: <ReportOutlinedIcon />,
  },
];

export default function NavList(props: Props) {
  const { open } = props;

  return (
    <List
      sx={{
        fontSize: '0.875rem',
      }}
    >
      <Grid container direction="column" justifyContent="space-between">
        <Grid item>
          {menuItems.map((item, index) => (
            <NavItem open={open} key={item.name + 'nav_item'} item={item} />
          ))}
        </Grid>
      </Grid>
    </List>
  );
}
