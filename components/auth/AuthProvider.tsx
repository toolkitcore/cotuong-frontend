'use client'

import useUser from '@/features/user/useUser'
import { useStore } from '@/lib/zustand/store'
import { usePathname, useRouter } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import LoadingBBQ from '../ui/LoadingBBQ'

const authPaths = ['/signin', '/signup']
const publicPaths = ['/', '/contact']

function AuthProvider({ children }: PropsWithChildren) {
    const { data, isLoading } = useUser()
    const { authorized, authorize, unauthorize, setUser, eraseUser } =
        useStore()
    const router = useRouter()
    const pathname = usePathname()
    const inAuthPath = authPaths.includes(pathname)
    const inPublicPath = publicPaths.includes(pathname)

    React.useEffect(() => {
        if (data) {
            authorize()
            setUser(data)
        } else {
            unauthorize()
            eraseUser()
        }
    }, [authorize, data, eraseUser, setUser, unauthorize])

    React.useEffect(() => {
        if (inPublicPath) {
            return
        }

        if (authorized) {
            if (inAuthPath) {
                router.replace('/')
                return
            }
            return
        }

        if (inAuthPath) {
            return
        }
        router.replace('/signin')
    }, [authorized, router, pathname, inAuthPath, inPublicPath])

    return (
        <>
            {isLoading ? (
                <div className="flex h-full w-full justify-center items-center">
                    <LoadingBBQ />
                </div>
            ) : (
                children
            )}
        </>
    )
}

export default AuthProvider