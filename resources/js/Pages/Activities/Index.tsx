import React from "react";
import { Activity, PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Control from "@/Pages/Tracker/Control";

export default function Activities({
    activities,
}: PageProps<{ activities: Activity[] }>) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Activity Tracker
                </h2>
            }
        >
            <Head title="Activity Tracker" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <Control/>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Application</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activities.map((activity) => (
                                        <tr key={activity.id}>
                                            <td>{activity.application_name}</td>
                                            <td>
                                                {new Date(
                                                    activity.start_time
                                                ).toLocaleString()}
                                            </td>
                                            <td>
                                                {activity.end_time
                                                    ? new Date(
                                                          activity.end_time
                                                      ).toLocaleString()
                                                    : "Still running"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
