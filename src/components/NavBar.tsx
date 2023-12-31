'use client';

import {useState} from 'react';

import {Navigation} from '@prisma/client';

export function NavBar({navigationItems}: {navigationItems: Navigation[]}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationGroups = new Map<string, Navigation[]>();

  for (const item of navigationItems) {
    const paths = item.path.split('/');
    const parent = paths.length > 1 ? paths[0] : 'main';
    navigationGroups.set(parent, [
      ...(navigationGroups.get(parent) ?? []),
      item,
    ]);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">HEADER</div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center"></nav>
        </div>
      </div>
    </header>
  );

  /*return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AppLogo />
          <p className="font-bold text-inherit">ChroniquEsport</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarBrand className="mr-5">
          <AppLogo />
          <p className="font-bold text-inherit">ChroniquEsport</p>
        </NavbarBrand>
        {(navigationGroups.get('main') ?? [])
          .sort((a, b) => a.order - b.order)
          .map(item => {
            if (item.type === NavigationType.GROUP) {
              return (
                <Dropdown key={item.path}>
                  <NavbarItem key={item.path}>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-medium"
                        endContent={'ICON'}
                        radius="sm"
                        variant="light"
                      >
                        {item.title}
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    aria-label="ACME features"
                    className="w-[340px]"
                    itemClasses={{
                      base: 'gap-4',
                    }}
                  >
                    {(navigationGroups.get(item.path) ?? [])
                      .sort((a, b) => a.order - b.order)
                      .map(subItem => (
                        <DropdownItem key={subItem.path}>
                          <Link color="foreground" href={subItem.path}>
                            {subItem.title}
                          </Link>
                        </DropdownItem>
                      ))}
                  </DropdownMenu>
                </Dropdown>
              );
            } else {
              return (
                <NavbarItem key={item.path}>
                  <Link color="foreground" href={item.path}>
                    {item.title}
                  </Link>
                </NavbarItem>
              );
            }
          })}
      </NavbarContent>
      <NavbarContent justify="end" />
      <NavbarMenu>
        {(navigationGroups.get('main') ?? [])
          .sort((a, b) => a.order - b.order)
          .map(item => {
            if (item.type === NavigationType.GROUP) {
              return (
                <Accordion
                  key={item.path}
                  className="px-0"
                  itemClasses={{
                    base: 'px-0 w-full',
                    trigger: 'px-0 py-0',
                    indicator: 'text-medium',
                    content: 'px-4',
                  }}
                >
                  <AccordionItem aria-label={item.title} title={item.title}>
                    {(navigationGroups.get(item.path) ?? [])
                      .sort((a, b) => a.order - b.order)
                      .map(subItem => (
                        <NavbarMenuItem key={subItem.path}>
                          <Link
                            className="text-default-500"
                            href={subItem.path}
                            size="lg"
                          >
                            {subItem.title}
                          </Link>
                        </NavbarMenuItem>
                      ))}
                  </AccordionItem>
                </Accordion>
              );
            } else {
              return (
                <NavbarMenuItem key={item.path}>
                  <Link
                    color="foreground"
                    href={item.path}
                    className="w-full"
                    size="lg"
                  >
                    {item.title}
                  </Link>
                </NavbarMenuItem>
              );
            }
          })}
      </NavbarMenu>
    </Navbar>
  );*/
}
