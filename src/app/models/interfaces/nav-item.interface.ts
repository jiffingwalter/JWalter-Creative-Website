export interface NavItem {
    name: string | undefined,
    path: string | undefined,
    children: Array<NavItem>
}
