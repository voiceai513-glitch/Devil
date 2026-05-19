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
} from "@mantine/core";

import {
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function UserCard({
  user,
}: any) {
  return (
    <Flex
      justify="center"
      px={15}
      py={30}
    >
      <Card
        shadow="xl"
        radius="xl"
        padding={0}
        withBorder
        style={{
          width: "100%",
          maxWidth: "900px",
          overflow: "hidden",
          background:
            "linear-gradient(180deg,#ffffff,#f8fbff)",
        }}
      >
        {/* TOP COVER */}
        <Box
          h={{
            base: 140,
            sm: 180,
          }}
          style={{
            background:
              "linear-gradient(135deg,#2196f3,#00bcd4,#7c4dff)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top right, rgba(255,255,255,0.4), transparent 40%)",
            }}
          />

          {/* PROFILE IMAGE */}
          <Avatar
            src={
              user.avatar ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSux_ANwWoO6ywDurlACz7HtTlcLebdqRf22DrStvIQ6g&s&ec=121691717"
            }
          
            radius="50%"
            style={{
              position: "absolute",
              bottom: -45,
              left: 25,
              border:
                "5px solid white",
              boxShadow:
                "0 8px 20px rgba(0,0,0,0.2)",
            }}
          />
        </Box>

        {/* CONTENT */}
        <Box
          p={{
            base: "md",
            sm: "xl",
          }}
          pt={60}
        >
          <Stack gap={10}>
            {/* NAME */}
            <Box>
              <Text
                fw={900}
                size="xl"
                style={{
                  color: "#111",
                }}
              >
                {user.firstName}{" "}
                {user.lastName}
              </Text>

              <Text
                size="sm"
                fw={600}
                c="blue"
              >
                Full Stack Developer
              </Text>
            </Box>

            {/* LOCATION */}
            <Group gap={6}>
              <FaMapMarkerAlt
                color="#666"
              />

              <Text
                size="sm"
                c="dimmed"
              >
                {user.location}
              </Text>
            </Group>

            {/* EMAIL */}
            <Text
              size="sm"
              c="dimmed"
              lineClamp={1}
            >
              {user.email}
            </Text>

            {/* PHONE */}
            <Group gap={6}>
              <FaPhoneAlt
                color="#666"
              />

              <Text
                size="sm"
                c="dimmed"
              >
                {user.phone}
              </Text>
            </Group>

            {/* WHATSAPP */}
            <Group gap={6}>
              <FaWhatsapp
                color="green"
              />

              <Text
                size="sm"
                c="dimmed"
              >
                {user.whatsapp}
              </Text>
            </Group>

            {/* BIO */}
            {user.bio && (
              <Box mt={5}>
                <Text
                  size="sm"
                  style={{
                    lineHeight: 1.8,
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
              <Button
                component="a"
                href={
                  user.instagram
                }
                target="_blank"
                radius="xl"
                size="md"
                leftSection={
                  <FaInstagram />
                }
                styles={{
                  root: {
                    background:
                      "linear-gradient(135deg,#ff4d6d,#c9184a)",
                    border: "none",
                  },
                }}
                fullWidth
              >
                Instagram
              </Button>

              <Button
                component="a"
                href={
                  user.facebook
                }
                target="_blank"
                radius="xl"
                size="md"
                leftSection={
                  <FaFacebook />
                }
                styles={{
                  root: {
                    background:
                      "linear-gradient(135deg,#1877f2,#0a58ca)",
                    border: "none",
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
                size="md"
                leftSection={
                  <FaWhatsapp />
                }
                styles={{
                  root: {
                    background:
                      "linear-gradient(135deg,#25D366,#128C7E)",
                    border: "none",
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