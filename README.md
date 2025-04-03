# Next Lucide Icons

A simple wrapper component for using Lucide Icons in Next.js and React projects. This component provides a way to render Lucide icons by name, without importing each icon manually.

## Usage

```tsx
import { Icon } from './path-to-icon';

export default function Example() {
  return (
    <div>
      <Icon name="User" size={24} />
      <Icon name="Check" className="text-green-500" />
    </div>
  );
}
```
