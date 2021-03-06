import * as React from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";

import {
  DataGrid,
  DataField,
  SortData,
  DataGridRow,
  DataGridCell,
  EnumTitleType,
  Button,
  Snackbar,
  TimeSince,
} from "@amplication/design-system";

import { ProjectTitle } from "../project/ProjectTitle";
import { Task } from "../api/task/Task";

type Data = Task[];

const SORT_DATA: SortData = {
  field: null,
  order: null,
};

const FIELDS: DataField[] = [
  {
    name: "id",
    title: "ID",
    sortable: false,
  },
  {
    name: "createdAt",
    title: "Created At",
    sortable: false,
  },
  {
    name: "estimationDays",
    title: "Estimation (days)",
    sortable: false,
  },
  {
    name: "project",
    title: "Project",
    sortable: false,
  },
  {
    name: "status",
    title: "Status",
    sortable: false,
  },
  {
    name: "title",
    title: "Title",
    sortable: false,
  },
  {
    name: "updatedAt",
    title: "Updated At",
    sortable: false,
  },
];

export const TaskList = (): React.ReactElement => {
  const { data, error, isError } = useQuery<Data, AxiosError>(
    "list-/api/tasks",
    async () => {
      const response = await api.get("/api/tasks");
      return response.data;
    }
  );

  return (
    <>
      <DataGrid
        fields={FIELDS}
        titleType={EnumTitleType.PageTitle}
        title={"Tasks"}
        loading={false}
        sortDir={SORT_DATA}
        toolbarContentEnd={
          <Link to={"/tasks/new"}>
            <Button>Create Task </Button>
          </Link>
        }
      >
        {data &&
          data.map((item: Task) => {
            return (
              <DataGridRow key={item.id} clickData={item}>
                <DataGridCell>
                  <Link className="entity-id" to={`${"/tasks"}/${item.id}`}>
                    {item.id}
                  </Link>
                </DataGridCell>
                <DataGridCell>
                  <TimeSince time={item.createdAt} />
                </DataGridCell>
                <DataGridCell>
                  <>{item.estimationDays}</>
                </DataGridCell>
                <DataGridCell>
                  <ProjectTitle id={item.project?.id} />
                </DataGridCell>
                <DataGridCell>
                  <>{item.status}</>
                </DataGridCell>
                <DataGridCell>
                  <>{item.title}</>
                </DataGridCell>
                <DataGridCell>
                  <TimeSince time={item.updatedAt} />
                </DataGridCell>
              </DataGridRow>
            );
          })}
      </DataGrid>
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
