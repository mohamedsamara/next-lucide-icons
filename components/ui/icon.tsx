import type { JSX } from 'react';
import type { LucideProps } from 'lucide-react';
import {
  LayoutDashboard,
  DollarSign,
  Package2,
  Users,
  Store,
  Megaphone,
  Eye,
  EyeOff,
  Loader2 as Spinner,
  ChevronRight,
  Settings,
  ChevronLeft,
  ChevronDown,
  Dot,
  PanelsTopLeft,
  LayoutGrid,
  LogOut,
  User,
  Ellipsis,
  MenuIcon,
  CircleUser,
  Trash,
  ArrowDown,
  ArrowUp,
  ChevronsUpDown,
  ChevronsRight,
  ChevronsLeft,
  Check,
  ChevronUp,
  Settings2,
  Circle,
  X,
  MoreHorizontal,
  GripHorizontal,
  RefreshCw,
  CheckIcon,
  XCircle,
  XIcon,
  WandSparkles,
  Pencil,
  Plus,
  Minus,
  FolderPlus,
  FolderMinus,
  FolderSearch,
  ChevronUpCircle,
  ChevronDownCircle,
  Warehouse,
  Search,
  Globe
} from 'lucide-react';

export type Icon = (props: LucideProps) => JSX.Element;
export type IconName =
  | 'LayoutDashboard'
  | 'DollarSign'
  | 'Package2'
  | 'Users'
  | 'Store'
  | 'Megaphone'
  | 'Eye'
  | 'EyeOff'
  | 'Spinner'
  | 'ChevronRight'
  | 'LayoutDashboard'
  | 'Settings'
  | 'ChevronLeft'
  | 'ChevronDown'
  | 'Dot'
  | 'PanelsTopLeft'
  | 'LayoutGrid'
  | 'LogOut'
  | 'User'
  | 'Ellipsis'
  | 'MenuIcon'
  | 'Package2'
  | 'CircleUser'
  | 'Trash'
  | 'ArrowDown'
  | 'ArrowUp'
  | 'ChevronsUpDown'
  | 'ChevronsRight'
  | 'ChevronsLeft'
  | 'Check'
  | 'ChevronUp'
  | 'Settings2'
  | 'Circle'
  | 'X'
  | 'MoreHorizontal'
  | 'GripHorizontal'
  | 'RefreshCw'
  | 'CheckIcon'
  | 'XCircle'
  | 'XIcon'
  | 'WandSparkles'
  | 'Pencil'
  | 'Plus'
  | 'Minus'
  | 'FolderPlus'
  | 'FolderMinus'
  | 'FolderSearch'
  | 'ChevronUpCircle'
  | 'ChevronDownCircle'
  | 'Warehouse'
  | 'Search'
  | 'Globe';

const IconMap = {
  LayoutDashboard,
  DollarSign,
  Package2,
  Users,
  Store,
  Megaphone,
  Eye,
  EyeOff,
  Spinner,
  ChevronRight,
  Settings,
  ChevronLeft,
  ChevronDown,
  Dot,
  PanelsTopLeft,
  LayoutGrid,
  LogOut,
  User,
  Ellipsis,
  MenuIcon,
  CircleUser,
  Trash,
  ArrowDown,
  ArrowUp,
  ChevronsUpDown,
  ChevronsRight,
  ChevronsLeft,
  Check,
  ChevronUp,
  Settings2,
  Circle,
  X,
  MoreHorizontal,
  GripHorizontal,
  RefreshCw,
  CheckIcon,
  XCircle,
  XIcon,
  WandSparkles,
  Pencil,
  Plus,
  Minus,
  FolderPlus,
  FolderMinus,
  FolderSearch,
  ChevronUpCircle,
  ChevronDownCircle,
  Warehouse,
  Search,
  Globe
};

type Props = LucideProps & {
  name: IconName;
};

export const Icon = ({ name, ...rest }: Props) => {
  const IconComponent = IconMap[name];

  return <IconComponent {...rest} />;
};

export type IconComponent = (props: LucideProps) => JSX.Element;
