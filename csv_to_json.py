import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    data = []
    with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
        csv_reader = csv.reader(csv_file)
        headers = next(csv_reader)  # Read the header row
        for row in csv_reader:
            entry = {"TIME": row[0], "LABEL": row[1]}
            data.append(entry)

    with open(json_file_path, mode='w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4)

if __name__ == "__main__":
    csv_file_path = 'video_04.csv'
    json_file_path = 'video_04.json'
    csv_to_json(csv_file_path, json_file_path)