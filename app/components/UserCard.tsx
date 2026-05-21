"use client";

import {
  Card,
  Text,
  Group,
  Button,
  Stack,
  Box,
  Flex,
  Avatar,
  Badge,
  Divider,
} from "@mantine/core";

import {
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function UserCard({
  user,
}: any) {
  return (
    <Flex justify="center" px={15} py={40}>
      <Card
        shadow="xl"
        radius="28px"
        padding={0}
        withBorder
        style={{
          width: "100%",
          maxWidth: "950px",
          overflow: "hidden",
          background:
            "linear-gradient(180deg,#ffffff,#f8fbff)",
          border: "1px solid #e9ecef",
        }}
      >
        {/* COVER */}
        <Box
          h={{
            base: 170,
            sm: 230,
          }}
          style={{
            background:
              "linear-gradient(135deg,#1e3c72,#2a5298,#6a11cb,#2575fc)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* GLOW */}
          <Box
            style={{
              position: "absolute",
              width: 350,
              height: 350,
              borderRadius: "50%",
              background:
                "rgba(255,255,255,0.15)",
              top: -120,
              right: -120,
              filter: "blur(10px)",
            }}
          />

          <Box
            style={{
              position: "absolute",
              width: 250,
              height: 250,
              borderRadius: "50%",
              background:
                "rgba(255,255,255,0.12)",
              bottom: -120,
              left: -100,
              filter: "blur(10px)",
            }}
          />

          {/* PROFILE IMAGE */}
          <Avatar
            src={
              user.avatar ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSux_ANwWoO6ywDurlACz7HtTlcLebdqRf22DrStvIQ6g&s&ec=121691717"
            }
            size={130}
            radius="50%"
            style={{
              position: "absolute",
              bottom: -55,
              left: 35,
              border: "6px solid white",
              boxShadow:
                "0 15px 35px rgba(0,0,0,0.25)",
              background: "#fff",
            }}
          />
        </Box>

        {/* CONTENT */}
        <Box
          p={{
            base: "md",
            sm: "xl",
          }}
          pt={75}
        >
          <Stack gap={18}>
            {/* NAME */}
            <Box>
              <Flex
                justify="space-between"
                align="center"
                wrap="wrap"
                gap={10}
              >
                <Box>
                  <Text
                    fw={900}
                    size="2rem"
                    style={{
                      color: "#111",
                      lineHeight: 1.1,
                    }}
                  >
                    {user.firstName}{" "}
                    {user.lastName}
                  </Text>

                  <Text
                    size="sm"
                    c="dimmed"
                    mt={4}
                  >
                    Professional Profile
                  </Text>
                </Box>

                <Badge
                  size="lg"
                  radius="xl"
                  variant="gradient"
                  gradient={{
                    from: "blue",
                    to: "cyan",
                    deg: 90,
                  }}
                >
                  Active User
                </Badge>
              </Flex>
            </Box>

            <Divider />

            {/* INFO */}
            <Group gap={30} wrap="wrap">
              {/* LOCATION */}
              <Group gap={8}>
                <Box
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "rgba(37,117,252,0.12)",
                  }}
                >
                  <FaMapMarkerAlt color="#2575fc" />
                </Box>

                <Box>
                  <Text size="xs" c="dimmed">
                    Location
                  </Text>

                  <Text fw={600}>
                    {user.location || "N/A"}
                  </Text>
                </Box>
              </Group>

              {/* PHONE */}
              <Group gap={8}>
                <Box
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "rgba(0,200,83,0.12)",
                  }}
                >
                  <FaPhoneAlt color="#00c853" />
                </Box>

                <Box>
                  <Text size="xs" c="dimmed">
                    Phone
                  </Text>

                  <Text fw={600}>
                    {user.phone || "N/A"}
                  </Text>
                </Box>
              </Group>

              {/* EMAIL */}
              <Group gap={8}>
                <Box
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "rgba(255,87,34,0.12)",
                  }}
                >
                  <FaEnvelope color="#ff5722" />
                </Box>

                <Box>
                  <Text size="xs" c="dimmed">
                    Email
                  </Text>

                  <Text fw={600}>
                    {user.email || "N/A"}
                  </Text>
                </Box>
              </Group>
            </Group>

            {/* WHATSAPP */}
            <Group gap={8}>
              <Box
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "rgba(37,211,102,0.12)",
                }}
              >
                <FaWhatsapp color="#25D366" />
              </Box>

              <Box>
                <Text size="xs" c="dimmed">
                  WhatsApp
                </Text>

                <Text fw={600}>
                  {user.whatsapp || "N/A"}
                </Text>
              </Box>
            </Group>

            {/* BIO */}
            {user.bio && (
              <Box
                mt={5}
                p="lg"
                style={{
                  borderRadius: 20,
                  background:
                    "linear-gradient(180deg,#f8fbff,#eef5ff)",
                  border:
                    "1px solid rgba(37,117,252,0.12)",
                }}
              >
                <Text
                  fw={700}
                  mb={8}
                  size="md"
                >
                  About
                </Text>

                <Text
                  size="sm"
                  style={{
                    lineHeight: 1.9,
                    color: "#444",
                  }}
                >
                  {user.bio}
                </Text>
              </Box>
            )}

            {/* BUTTONS */}
            <Group
              grow
              mt="lg"
              wrap="wrap"
            >
              {/* INSTAGRAM */}
              <Button
                component="a"
                href={user.instagram}
                target="_blank"
                radius="xl"
                size="lg"
                leftSection={<FaInstagram />}
                styles={{
                  root: {
                    height: 52,
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg,#ff4d6d,#c9184a)",
                    border: "none",
                    boxShadow:
                      "0 8px 20px rgba(201,24,74,0.25)",
                  },
                }}
                fullWidth
              >
                Instagram
              </Button>

              {/* FACEBOOK */}
              <Button
                component="a"
                href={user.facebook}
                target="_blank"
                radius="xl"
                size="lg"
                leftSection={<FaFacebook />}
                styles={{
                  root: {
                    height: 52,
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg,#1877f2,#0a58ca)",
                    border: "none",
                    boxShadow:    
                      "0 8px 20px rgba(24,119,242,0.25)",
                  },
                }}
                fullWidth
              >
                Facebook
              </Button>

                    
              <Button
                component="a"
                href={`https://wa.me/${user.whatsapp}`}
                target="_blank"
                radius="xl"
                size="lg"
                leftSection={<FaWhatsapp />}
                styles={{          
                  root: {
                    height: 52,
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg,#25D366,#128C7E)",
                    border: "none",
                    boxShadow:
                      "0 8px 20px rgba(37,211,102,0.25)",
                  },
                }}
                fullWidth
              >
                WhatsApp
              </Button>
            </Group>   
          </Stack>
        </Box>
      </Card>
    </Flex>      
  );
}       