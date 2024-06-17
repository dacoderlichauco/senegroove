import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    # Read the CSV file and add data to a list of dictionaries
    data = []
    with open(csv_file_path, mode='r', encoding='utf-8-sig') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data.append(row)

    # Write the list of dictionaries to a JSON file
    with open(json_file_path, mode='w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4)

# Example usage
csv_file_path = 'easy_pattern_times.csv'
json_file_path = 'easy_pattern_times.json'
csv_to_json(csv_file_path, json_file_path)
