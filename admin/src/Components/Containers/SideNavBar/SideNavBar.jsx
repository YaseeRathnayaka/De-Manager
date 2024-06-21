import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Switch,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const SideNavBar = () => {
  const [open, setOpen] = useState(0);
  const [analyticsSwitch, setAnalyticsSwitch] = useState(false);
  const [appointmentsSwitch, setAppointmentsSwitch] = useState(false);
  const [detailsSwitch, setDetailsSwitch] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const navigate = useNavigate();
  
  const CalendarNav = () => {
    navigate('/calendar');
  };
  const DashboardNav = () => {
    navigate('/dashboard');
  };
  
  const ListViewNav = () => {
    navigate('/listview');
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-custom-blue mt-3 ml-3 rounded-xl">
      <div className="p-4 mb-2">
        <Typography variant="h6" color="blue-gray">
         De - Manager
        </Typography>
        
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="p-3 border-b-0"
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="w-5 h-5" />
              </ListItemPrefix>
              <Typography onClick={DashboardNav} color="blue-gray" className="mr-auto text-base">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open === 1 && (
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto">
                    Analytics
                  </Typography>
                  <ListItemSuffix>
                    <Switch
                      color="blue"
                      checked={analyticsSwitch}
                      onChange={() => setAnalyticsSwitch(!analyticsSwitch)}
                    />
                  </ListItemSuffix>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto">
                    Appointments
                  </Typography>
                  <ListItemSuffix>
                    <Switch
                      color="blue"
                      checked={appointmentsSwitch}
                      onChange={() => setAppointmentsSwitch(!appointmentsSwitch)}
                    />
                  </ListItemSuffix>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto">
                    Appointment Details
                  </Typography>
                  <ListItemSuffix>
                    <Switch
                      color="blue"
                      checked={detailsSwitch}
                      onChange={() => setDetailsSwitch(!detailsSwitch)}
                    />
                  </ListItemSuffix>
                </ListItem>
              </List>
            </AccordionBody>
          )}
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="p-3 border-b-0"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="w-5 h-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Scheduled Events
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open === 2 && (
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem onClick={ListViewNav}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                  </ListItemPrefix>
                  List View
                </ListItem>
                <ListItem onClick={CalendarNav}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                  </ListItemPrefix>
                  Calender View
                </ListItem>
              </List>
            </AccordionBody>
          )}
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="w-5 h-5" />
          </ListItemPrefix>
          Requests
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="filled"
              color="red"
              className="ml-5 rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="w-5 h-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="w-5 h-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="w-5 h-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      <Typography variant="body2" color="blue-gray" className="mt-auto">
          {currentDateTime.toLocaleString()}
        </Typography>
    </Card>
  );
};

export default SideNavBar;
