import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { theme } from "../../components";

function MonthSelector() {
  const [selectedValue, setSelectedValue] = useState(monthsLabel);
  const monthsLabel = [
    { mon_labels: "January", value: "1" },
    { mon_labels: "February", value: "2" },
    { mon_labels: "March", value: "3" },
    { mon_labels: "April", value: "4" },
    { mon_labels: "May", value: "5" },
    { mon_labels: "June", value: "6" },
    { mon_labels: "July", value: "7" },
    { mon_labels: "August", value: "8" },
    { mon_labels: "September", value: "9" },
    { mon_labels: "October", value: "10" },
    { mon_labels: "November", value: "11" },
    { mon_labels: "December", value: "12" },
  ];

  return (
    <View style={styles.screen}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(value, index) => setSelectedValue(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        {monthsLabel.map((item, index) => {
          return (
            <Picker.Item
              key={index}
              label={`${item.mon_labels}`}
              value={`${item.value}`}
            />
          );
        })}
      </Picker>
    </View>
  );
}

export default MonthSelector;

// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 30,
    maxWidth: 200,
    borderColor: theme.colors.silver1,
    marginTop: 10,
  },
  picker: {
    marginVertical: 10,
    height: 30,
    minWidth: 190,
    padding: 10,
  },
});
