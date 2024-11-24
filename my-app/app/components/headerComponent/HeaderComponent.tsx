"use client";
import { Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { MenuOutlined, ProductOutlined, InfoCircleOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

const HeaderComponent: React.FC = () => {
  const [bgcolor, setBgColor] = useState("");
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    const color = localStorage.getItem("backgroundColor");
    if (color) {
      setBgColor(color);
    } else {
      setBgColor("blue");
    }
  }, []);

  const menuItems: MenuItem[] = [
    {
      key: "Menu",
      label: "Menu",
      icon: <MenuOutlined />,
      children: [
        {
          key: "about",
          label: "About-Us",
          icon: <InfoCircleOutlined />,
          children: [
            { key: "1", label: "Phone Number" },
            { key: "2", label: "Location" },
          ],
        },
        {
          key: "products",
          label: "Products",
          icon: <ProductOutlined />,
          children: [
            { key: "3", label: "Medicines" },
            { key: "4", label: "Clothing" },
          ],
        },
      ],
    },
  ];

  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const onClick: MenuProps['onClick'] = (e: Element) => {
    console.log("click ", e);
  };

  return (
    <>
      <header
        className="w-full h-28 text-3xl top-0 text-center flex justify-between items-center px-8 overflow-y-visible"
        style={{ backgroundColor: bgcolor }}
      >
        <div className="h-10 w-fit zIndex: 10">
          <Menu
            onClick={onClick}
            mode="inline"
            items={menuItems}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            inlineCollapsed
            style={{ width: 40, maxHeight: '200px', height: '40px', overflow: 'visible' ,backgroundColor :"white" }}
            />
        </div>
            <p className="w-5/6">This Is Header</p>
      </header>
    </>
  );
};

export default HeaderComponent;
